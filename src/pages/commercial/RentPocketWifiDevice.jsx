import DeliveryCharges from "@/components/commercial/rent-device/DeliveryCharges";
import DropoffProcess from "@/components/commercial/rent-device/DropoffProcess";
import NewTripProcess from "@/components/commercial/rent-device/NewTripProcess";
import PickUpProcess from "@/components/commercial/rent-device/PickUpProcess";
import HowToRent from "@/components/commercial/rent-device/PickUpProcess";
import RentWays from "@/components/commercial/rent-device/RentWays";

export default function RentPocketWifiDevice() {
  return (
    <div className="overflow-hidden w-full">
      <PickUpProcess />
      <DeliveryCharges />
      <RentWays />
      <DropoffProcess />
      <NewTripProcess />
    </div>
  );
}
