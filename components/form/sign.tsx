import dynamic from "next/dynamic";
import { TFunction } from "i18next";
import { authSign } from "@/actions/auth/sign/auth";
const Input = dynamic(() => import("@/components/form/input"));
const Button = dynamic(() => import("@/components/button"));

type fc = {
  t: TFunction<any, string>;
};

const SignForm: React.FC<fc> = ({ t }) => {
  return (
    <form
      action={authSign}
      className="py-8 flex flex-col justify-between gap-4"
    >
      <Input
        name="email"
        type="email"
        autoComplete="username"
        label={t("authentication.sigin.form.email.label")}
        placeholder={t("authentication.sigin.form.email.placeholder")}
      />
      <Input
        name="password"
        type="password"
        autoComplete="current-password"
        label={t("authentication.sigin.form.password.label")}
        placeholder={t("authentication.sigin.form.password.placeholder")}
      />
      <Button
        type="submit"
        text={t("authentication.sigin.form.submit")}
        variant="lg"
      />
    </form>
  );
};

export default SignForm;
