import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

function DatePicker({
  wrapper = "",
  label = "",
  labelClass = "",
  date,
  setDate,
}) {
  const { t } = useTranslation();

  return (
    <div className={cn("w-full flex items-center gap-2", wrapper)}>
      {label && (
        <span className={cn("label whitespace-nowrap", labelClass)}>
          {label}
        </span>
      )}
      <Popover>
        <PopoverTrigger className="" asChild>
          <Button
            variant="datepicker"
            size="datepicker"
            className={cn(
              "justify-start text-left font-normal w-full h-[3.125rem] bg-neutral-50 py-3.5 px-4 rounded-xl border border-neutral-300"
            )}
          >
            <CalendarIcon />
            <span className="flex-1">
              {date ? format(date, "PPP") : t("form.pickADate")}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
