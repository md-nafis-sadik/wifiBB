import CartDeviceCard from "@/components/shared/cards/CartDeviceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { setPocketWifiCartData } from "@/store/module/pocketWifi/slice";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

function WifiDevices() {
  const { cart } = useSelector((state) => state.pocketWifi);
  const { wifiDevices } = useSelector((state) => state?.auth);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDeviceSelect = (item) => {
    dispatch(setPocketWifiCartData({ device: item }));
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-base font-semibold text-black-700">
          {t("extraText.selectDevice")}
        </span>
        <Accordion type="single" className="flex flex-col gap-4" collapsible>
          <AccordionItem
            className="border-none bg-transparent"
            value="topup-device"
          >
            <AccordionTrigger className="border rounded-xl text-base font-normal">
              {t("extraText.selectDeviceToTopUp")}
            </AccordionTrigger>
            <AccordionContent className="px-0 pt-4">
              <div className="flex flex-col gap-4">
                {wifiDevices?.map((item, index) => (
                  <CartDeviceCard
                    onClick={() => handleDeviceSelect(item)}
                    key={index}
                    index={index}
                    translableName={t("extraText.wifiDevices")}
                    item={item}
                    isActive={cart?.device?.deviceId == item?.deviceId}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default WifiDevices;
