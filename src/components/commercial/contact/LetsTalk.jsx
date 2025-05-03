import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { handleNumericInput } from "@/services";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LetsTalk = ({ data = [], socialLinks = [] }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const maxChars = 250;

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit data", { name, phone, email, subject, text });
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setText("");
  };

  return (
    <div className="containerX xl:px-0" id="lets-talk">
      <div className="sec_common_80 xl:px-0 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-[60px]">
        {/* LEFT PORTION */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-12">
          <h2 className="title text-start">{t("contact.letsTalk.heading")}</h2>
          <p className="p_common text-black-700">
            {t("contact.letsTalk.subHeading")}
          </p>

          {data?.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-row items-center gap-6",
                index === 1 && "mt-2 md:mt-0"
              )}
            >
              <LazyLoadImage
                src={item?.image}
                alt={item?.title}
                className="w-12 md:w-16 aspect-square shrink-0 object-contain"
              />

              <div className="flex flex-col gap-1">
                <p className="p_common text-black-600 uppercase">
                  {t(`contact.letsTalk.social.${index}.text`)}
                </p>
                <a
                  href={
                    item.type === "email"
                      ? `mailto:${item.value}`
                      : `https://wa.me/${item.value.replace(/\D/g, "")}`
                  }
                  target="_blank"
                  className="text-lg md:text-2xl font-semibold md:font-bold !leading-[1.4]"
                >
                  {item?.value}
                </a>
              </div>
            </div>
          ))}

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-x-5 mt-2 md:mt-0">
              {socialLinks.map((item, index) => (
                <a href={item.link} target="_blank" key={index}>
                  {item.icon()}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT PORTION */}
        <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-2 h-fit gap-x-[28px] gap-y-6">
            <Input
              label={t(`contact.letsTalk.form.fields.0.label`)}
              placeholder={t(`contact.letsTalk.form.fields.0.placeholder`)}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              wrapperClass={"col-span-2 md:col-span-1"}
            />
            <Input
              label={t(`contact.letsTalk.form.fields.1.label`)}
              placeholder={t(`contact.letsTalk.form.fields.1.placeholder`)}
              name="phone"
              wrapperClass={"col-span-2 md:col-span-1"}
              className="no-spinner"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={handleNumericInput}
              onPaste={handleNumericInput}
            />
            <Input
              label={t(`contact.letsTalk.form.fields.2.label`)}
              placeholder={t(`contact.letsTalk.form.fields.2.placeholder`)}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              wrapperClass={"col-span-2"}
            />
            <Input
              label={t(`contact.letsTalk.form.fields.3.label`)}
              placeholder={t(`contact.letsTalk.form.fields.3.placeholder`)}
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              wrapperClass={"col-span-2"}
            />
            <Textarea
              label={t(`contact.letsTalk.form.fields.4.label`)}
              placeholder={t(`contact.letsTalk.form.fields.4.placeholder`)}
              wrapperClass={"col-span-2"}
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={maxChars}
              className="resize-none"
            />
          </div>

          <Button type="submit" size={"lg"} className="mt-6">
            {t("buttonText.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
