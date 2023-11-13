"use client";
import dynamic from "next/dynamic";
import { useTransition } from "react";
import { authSign } from "@/actions/auth/sign/auth";
import { useTranslation } from "@/i18n/client";
import { Locale } from "@/i18n/settings";
const Input = dynamic(() => import("@/components/form/sign/input"));
const Button = dynamic(() => import("@/components/button"));

type fc = {
  lang: Locale;
};

const SignForm: React.FC<fc> = ({ lang }) => {
  const { t } = useTranslation(lang, "authentication", {});
  const [isPending, startTransition] = useTransition();
  return (
    <form
      action={(formData: FormData) => {
        startTransition(async () => {
          await authSign(formData);
        });
      }}
      className="py-8 flex flex-col justify-between gap-4"
    >
      <Input
        name="email"
        type="email"
        autoComplete="username"
        label={t("authentication.sigin.form.email.label")}
        data-testid="authentication.sigin.form.email.input"
        placeholder={t("authentication.sigin.form.email.placeholder")}
      />
      <Input
        name="password"
        type="password"
        autoComplete="current-password"
        label={t("authentication.sigin.form.password.label")}
        data-testid="authentication.sigin.form.password.input"
        placeholder={t("authentication.sigin.form.password.placeholder")}
      />
      <Button
        type="submit"
        text={t("authentication.sigin.form.submit")}
        data-testid={"authentication.sigin.form.submit"}
        variant="lg"
        disabled={isPending}
        className={`brand_with_loading btn_primary ${
          isPending ? "loading" : ""
        }`}
      />
    </form>
  );
};

export default SignForm;
