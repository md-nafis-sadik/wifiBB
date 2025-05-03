import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SuccessIcon, validateEmail } from "@/services";
import { Fragment, useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { LogOutIcon, User2Icon, UserIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const DialogHeader = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700 !leading-[1.4] text-center">
        {title}
      </h1>
      <p className="text-sm md:text-base !leading-[1.4] md:!leading-[1.5] text-center text-black-600">
        {text}
      </p>
    </div>
  );
};

const OTPInput = ({ setOtp, ...props }) => {
  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      containerClassName={"w-full"}
      onChange={(otp) => setOtp(otp)}
      autoFocus
      {...props}
    >
      <InputOTPGroup className={"w-full flex justify-center gap-3"}>
        {[...Array(6)].map((_, index) => (
          <InputOTPSlot
            index={index}
            key={index}
            readOnly
            className={
              "border-2 shadow-none text-black-600 rounded-[8px] md:rounded-xl h-10 md:h-[52px] w-10 md:w-[52px] text-lg md:text-[27px] !leading-[1.4]"
            }
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
};

const BottomTextLink = ({ text, linkText, onClick }) => (
  <p className="text-sm md:text-base font-normal text-black-600 mt-2 md:mt-3">
    {text}{" "}
    <span
      className="font-semibold text-main-600 hover:underline cursor-pointer"
      onClick={onClick}
    >
      {linkText}
    </span>
  </p>
);

const AuthDialog = ({ isOpen, setIsOpen }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [signInStage, setSignInStage] = useState(1);
  const [signUpStage, setSignUpStage] = useState(null);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");

  const { t } = useTranslation();

  // SETS THE DISABLED STATE OF THE CONTINUE BUTTON BASED ON THE CURRENT STAGE
  useEffect(() => {
    if (signInStage === 1) {
      setIsButtonDisabled(phone.length <= 5);
    } else if (signInStage === 2 || signUpStage === 3) {
      setIsButtonDisabled(otp.length !== 6);
    } else if (signUpStage === 1) {
      setIsButtonDisabled(
        name.firstName.length < 3 || name.lastName.length < 3
      );
    } else if (signUpStage === 2) {
      setIsButtonDisabled(!validateEmail(email) || phone.length <= 5);
    }
  }, [signInStage, signUpStage, phone, otp, name, email]);

  // EVENT HANDLER TO HANDLE NEXT/CONTINUE BUTTON PRESS. IT DEFINES THE FLOW OF THE DIALOG
  const handleContinuePress = () => {
    if (signInStage === 1 && phone.length > 5) {
      setSignInStage(2);
    } else if (signInStage === 2 && otp.length === 6) {
      setSignInStage(3);
    } else if (signInStage === 3) {
      setSignInStage(4);
    } else if (
      signUpStage === 1 &&
      name.firstName.length >= 3 &&
      name.lastName.length >= 3
    ) {
      setSignUpStage(2);
    } else if (signUpStage === 2 && validateEmail(email) && phone.length > 5) {
      setSignUpStage(3);
    } else if (signUpStage === 3) {
      setSignUpStage(4);
    } else if (signUpStage === 4) {
      setSignUpStage(5);
    } else {
      setIsOpen(false);
    }
  };

  const logoutHandler = () => {
    setIsButtonDisabled(false);
    setSignInStage(1);
    setSignUpStage(null);
    setIsOpen(false);
    setName({ firstName: "", lastName: "" });
    setEmail("");
    setPhone("");
    setOtp("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent
        showCloseIcon={true}
        className={cn(
          "w-[calc(100vw-32px)] max-w-[540px] h-auto min-h-[286px] sm:min-h-[438px] rounded-xl md:rounded-3xl flex flex_center flex-col px-4 md:px-8 lg:px-[60px] pt-10 md:pt-[60px] pb-6 md:pb-[60px] gap-6 md:gap-12",
          signInStage === 3 || signUpStage === 4 ? "bg-main-50" : "bg-white"
        )}
      >
        <DialogTitle className={"hidden"} />

        {/* SIGN IN FLOW */}
        {signInStage === 1 && (
          <Fragment>
            <DialogHeader
              title={t("authModal.authMessages.welcomeBack.title")}
              text={t("authModal.authMessages.welcomeBack.text")}
            />

            <PhoneInput
              defaultCountry="us"
              value={phone}
              className={cn(
                "text-sm md:text-base !mt-0 font-normal !leading-normal w-full bg-white"
              )}
              onChange={(phone) => setPhone(phone)}
              style={{
                "--react-international-phone-flag-background-color":
                  "transparent rounded-[20px]",
              }}
            />
          </Fragment>
        )}
        {(signInStage === 2 || signUpStage === 3) && (
          <Fragment>
            <DialogHeader
              title={t(`authModal.authMessages.verification.title`)}
              text={t(`authModal.authMessages.verification.text`)}
            />

            <OTPInput setOtp={setOtp} />
          </Fragment>
        )}

        {/* SIGN UP FLOW */}
        {signUpStage === 1 && (
          <Fragment>
            <DialogHeader
              title={t(`authModal.authMessages.signUp.title`)}
              text={t(`authModal.authMessages.signUp.text`)}
            />
            <div className="flex flex-col gap-2 md:gap-3 w-full">
              <Input
                placeholder={t(`authModal.placeholders.firstName`)}
                name="firstName"
                type="text"
                onChange={(e) =>
                  setName({ ...name, firstName: e.target.value })
                }
                required
              />
              <Input
                placeholder={t(`authModal.placeholders.lastName`)}
                name="lastName"
                type="text"
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
                required
              />
            </div>
          </Fragment>
        )}
        {signUpStage === 2 && (
          <Fragment>
            <DialogHeader
              title={t(`authModal.authMessages.signUp.title`)}
              text={t(`authModal.authMessages.signUp.text`)}
            />
            <div className="flex flex-col gap-2 md:gap-3 w-full">
              <Input
                placeholder={t(`authModal.placeholders.email`)}
                name="email"
                type="email"
                onChange={(e) =>
                  setEmail(e.target.value.replace(/\s/g, "").toLowerCase())
                }
                required
              />
              <PhoneInput
                defaultCountry="us"
                value={phone}
                className={cn(
                  "text-sm md:text-base !mt-0 font-normal !leading-normal w-full bg-white"
                )}
                onChange={(phone) => setPhone(phone)}
                style={{
                  "--react-international-phone-flag-background-color":
                    "transparent rounded-[20px]",
                }}
              />
            </div>
          </Fragment>
        )}

        {/* SUCCESS MODAL */}
        {(signInStage === 3 || signUpStage === 4) && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
              <SuccessIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
            </div>
            <DialogHeader
              title={
                signInStage
                  ? t(`authModal.authMessages.loginSuccessful.title`)
                  : t(`authModal.authMessages.signUpSuccessful.title`)
              }
              text={
                signInStage
                  ? t(`authModal.authMessages.loginSuccessful.text`)
                  : t(`authModal.authMessages.accountReady.text`)
              }
            />
          </div>
        )}

        {/* WHEN USER IS LOGGED IN */}
        {(signInStage > 3 || signUpStage > 4) && (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center">
              <User2Icon
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-main-500 rounded-full"
                stroke="#fff"
              />
            </div>
            <DialogHeader
              title={`Hi ${name.firstName} ${name.lastName}!`}
              text={
                signInStage
                  ? t(`authModal.authMessages.loginSuccessful.text`)
                  : t(`authModal.authMessages.accountReady.text`)
              }
            />
            <Button
              variant="secondary"
              size="lg"
              className=""
              onClick={logoutHandler}
            >
              <LogOutIcon className="w-6 h-6" /> {t(`buttonText.logout`)}
            </Button>
          </div>
        )}

        {/* EVENT HANDLER BUTTON WITH BOTTOM TEXT AND NAVIGATION */}
        {signInStage <= 3 && signUpStage <= 4 && (
          <div className="w-full flex_center flex-col">
            <Button
              size="lg"
              className={cn(
                "h-11 md:h-[52px] text-base font-semibold !leading-[1.2] rounded-xl select-none",
                isButtonDisabled && "bg-disabled",
                signInStage === 3 || signUpStage === 4 ? "w-fit" : "w-full"
              )}
              disabled={isButtonDisabled}
              onClick={handleContinuePress}
            >
              {(signInStage === 1 || signUpStage === 2) &&
                t(`buttonText.continue`)}
              {(signInStage === 2 || signUpStage === 3) &&
                t(`buttonText.verify`)}
              {(signInStage === 3 || signUpStage === 4) &&
                t(`buttonText.continue`)}
              {signUpStage === 1 && t(`buttonText.next`)}
            </Button>
            {signInStage && signInStage === 1 && (
              <BottomTextLink
                text={t(`authModal.prompts.noAccount.text`)}
                linkText={t(`authModal.prompts.noAccount.linkText`)}
                onClick={() => {
                  setSignUpStage(1);
                  setSignInStage(null);
                }}
              />
            )}
            {signUpStage && signUpStage <= 2 && (
              <BottomTextLink
                text={t(`authModal.prompts.hasAccount.text`)}
                linkText={t(`authModal.prompts.hasAccount.linkText`)}
                onClick={() => {
                  setSignInStage(1);
                  setSignUpStage(null);
                }}
              />
            )}
            {(signInStage === 2 || signUpStage === 3) && (
              <BottomTextLink
                text={t(`authModal.prompts.resendOTP.text`)}
                linkText={t(`authModal.prompts.resendOTP.linkText`)}
                onClick={() => {
                  // Function to send otp
                }}
              />
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
