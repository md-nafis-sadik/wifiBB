import { cn } from "@/lib/utils";
import { VisaIcon } from "@/services";

function CartPaymentCard({ item = {}, wrapperClass = "", ...props }) {
  const numbers = item?.cardNumber?.match(/.{1,4}/g);
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-14 py-6 px-4 rounded-[10.629px] bg-main-600 text-white font-gilroy cursor-pointer",
        wrapperClass
      )}
      {...props}
    >
      <div className="flex justify-between">
        <span className="font-bold text-xxs">Credit Card</span>
        <VisaIcon />
      </div>
      <div className="flex items-center gap-4">
        {numbers?.map((number, index) => (
          <span className="font-base font-medium" key={index}>
            {number}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <span className="font-medium text-xxs">{item?.username}</span>
        <span className="font-medium text-xxs">{item?.expireDate}</span>
      </div>
    </div>
  );
}

export default CartPaymentCard;
