import { setPocketWifiCartData } from "@/store/module/pocketWifi/slice";
import { setRouterCartData } from "@/store/module/router/slice";
import { setSimCartData } from "@/store/module/sim/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useSetLocalData(layout) {
  const dispatch = useDispatch();

  const setLocalData = () => {
    const pocketWifiData = localStorage.getItem("pocket_wifi_cart");
    const routerData = localStorage.getItem("router_cart");
    const simData = localStorage.getItem("sim_cart");

    if (pocketWifiData && layout === "pocketWifi") {
      const data = JSON.parse(pocketWifiData);
      dispatch(setPocketWifiCartData(data));
    } else {
      localStorage.removeItem("pocket_wifi_cart");
    }

    if (routerData && layout === "router") {
      const data = JSON.parse(routerData);
      dispatch(setRouterCartData(data));
    } else {
      localStorage.removeItem("router_cart");
    }

    if (simData && layout === "sim") {
      const data = JSON.parse(simData);
      dispatch(setSimCartData(data));
    } else {
      localStorage.removeItem("sim_cart");
    }
  };

  useEffect(() => {
    setLocalData();
  }, []);

  return;
}

export default useSetLocalData;
