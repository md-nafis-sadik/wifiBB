import { cn } from "@/lib/utils";

function CartLocationCard({ item = {}, wrapperClass = "", ...props }) {
  return (
    <div
      className={cn(
        "px-8 py-6 hover:bg-neutral-100 cursor-pointer duration-300",
        wrapperClass
      )}
      {...props}
    >
      <h2 className="text-base font-semibold text-black-900 mb-2">
        {item?.name}
      </h2>
      <span className="tag">{item?.location?.city}</span>
      <p className="text-sm font-semibold text-black-700 mb-1 mt-3">
        {item?.code}
      </p>
      <p className="text-sm text-black-600">
        {item?.location?.address?.street}
      </p>
      <p className="text-sm text-black-600">
        {item?.location?.address?.postal_code} {item?.location?.city}
      </p>
    </div>
  );
}

export default CartLocationCard;
