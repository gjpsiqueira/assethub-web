"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Mode = "login" | "signup";

const socialProviders = [
  {
    key: "google",
    label: "Sign in with Google",
    shortLabel: "Continue with Google",
    icon: <FcGoogle className="h-7 w-7" aria-hidden="true" />
  },
  {
    key: "apple",
    label: "Sign in with Apple",
    shortLabel: "Continue with Apple",
    icon: (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white text-lg" aria-hidden="true">
        <FaApple className="h-4 w-4" />
      </span>
    )
  },
  {
    key: "facebook",
    label: "Sign in with Facebook",
    shortLabel: null,
    icon: (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1b74e4] text-white text-lg font-semibold" aria-hidden="true">
        <FaFacebookF className="h-4 w-4" />
      </span>
    )
  }
];

export default function AuthModal() {
  const [mode, setMode] = useState<Mode>("login");
  const router = useRouter();
  const isSignup = mode === "signup";
  const visibleProviders = isSignup ? socialProviders.filter((provider) => provider.key !== "facebook") : socialProviders;

  return (
    <div className={cn("w-full px-2", isSignup ? "max-w-6xl" : "max-w-xl")}> 
      <div className="relative max-h-[calc(100vh-2rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          aria-label="Fechar modal"
        >
          ✕
        </button>

        <div className={cn("grid", isSignup ? "md:grid-cols-2 lg:grid-cols-[1.05fr,0.95fr]" : "grid-cols-1")}> 
          <div className="p-8 md:p-10 md:overflow-y-auto">
            <div className="mx-auto max-w-lg">
              <div className="mb-6 inline-flex rounded-full border border-slate-300 bg-white text-sm font-semibold shadow-sm">
                <TabButton label="Login" active={!isSignup} onClick={() => setMode("login")} />
                <TabButton label="Cadastro" active={isSignup} onClick={() => setMode("signup")} />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold leading-tight">{isSignup ? "Create Free Account" : "Member Sign In"}</h2>
                  {!isSignup ? (
                    <p className="text-sm text-slate-600">Acesse com sua conta ou continue com um provedor.</p>
                  ) : null}
                </div>

                <div className="space-y-3">
                  {visibleProviders.map((provider) => (
                    <SocialButton
                      key={provider.key}
                      label={isSignup && provider.shortLabel ? provider.shortLabel : provider.label}
                      icon={provider.icon}
                    />
                  ))}
                </div>

                <Divider label="or" />

                <form className="space-y-4">
                  <Input label="Email" type="email" placeholder="you@example.com" />
                  <Input label="Password" type="password" placeholder="••••••••" />

                  <button
                    type="button"
                    className="mt-2 w-full rounded-xl bg-black px-4 py-3 text-base font-semibold text-white shadow-md transition hover:bg-black/85"
                  >
                    {isSignup ? "Create Account" : "Sign in"}
                  </button>
                </form>

                <div className="space-y-3 text-sm text-slate-700">
                  <p className="text-center">
                    {isSignup ? (
                      <>
                        Already have an account? {" "}
                        <button type="button" onClick={() => setMode("login")} className="font-semibold text-sky-700 hover:underline">
                          Sign in
                        </button>
                      </>
                    ) : (
                      <>
                        Don&apos;t have an account? {" "}
                        <button type="button" onClick={() => setMode("signup")} className="font-semibold text-sky-700 hover:underline">
                          Create free account
                        </button>
                      </>
                    )}
                  </p>

                  <p className="text-xs leading-5 text-slate-500">
                    By signing {isSignup ? "up" : "in"} using any of the options above, you agree to the Terms of Use & Privacy Policy.
                  </p>

                  {!isSignup ? (
                    <p className="text-xs leading-5 text-slate-500">
                      Forgot password? Reset it or request a sign in link. Other issues? contact@assethub.com
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {isSignup ? (
            <div className="hidden h-full border-t border-slate-200 bg-[#f4ece4] px-8 py-10 text-slate-900 md:block md:border-l md:border-t-0">
              <div className="flex h-full flex-col space-y-4">
                <h3 className="text-2xl font-bold leading-snug">Invest Smarter, Not Harder</h3>
                <p className="text-lg font-semibold">Make informed investment decisions with AssetHub</p>

                <ul className="space-y-3 text-base">
                  <Benefit icon="📢" text="Get unlimited access to breaking stock news" />
                  <Benefit icon="📰" text="Subscribe to tailored newsletters for your interests" />
                  <Benefit icon="📊" text="Create multiple portfolios and track your favorite stocks" />
                </ul>

                <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-xl text-amber-500">*****</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-800">
                    "Excellent reports and analysis and a pleasure to use and access. I highly recommend this site for the best information."
                  </p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">United States 2025</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 transition first:rounded-l-full last:rounded-r-full",
        active ? "bg-black text-white" : "text-slate-600 hover:bg-slate-100"
      )}
    >
      {label}
    </button>
  );
}

function SocialButton({ label, icon }: { label: string; icon: JSX.Element }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-slate-400 px-4 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
      <span className="h-px flex-1 bg-slate-200" />
      {label}
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

function Benefit({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm font-semibold text-slate-900">
      <span className="mt-0.5 text-lg">{icon}</span>
      <span>{text}</span>
    </li>
  );
}

function Input({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block space-y-2 text-sm text-slate-900">
      <span className="font-semibold">{label}</span>
      <input
        {...props}
        className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
      />
    </label>
  );
}
