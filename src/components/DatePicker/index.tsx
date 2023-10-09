import React from "react";
import { DateRangePicker, DatePicker } from "rsuite";
import ptBR from "rsuite/locales/pt_BR";
import "./styles.css";

interface DatePickerProps {
  dateSelected: [Date, Date] | any | null;
  setDateSelected: React.Dispatch<React.SetStateAction<[Date, Date] | null>>;
  setDateRangeSelected: React.Dispatch<React.SetStateAction<DateRange | null>>;
  dateRangeSelected: DateRange | null;
  typeDate: "date" | "range";
}

interface DateRange {
  startDate: string;
  endDate: string;
}

const DateRangerPicker: React.FC<DatePickerProps> = ({
  dateSelected,
  setDateSelected,
  setDateRangeSelected,
  dateRangeSelected,
  typeDate,
}) => {
  function value() {
    const dateString = dateRangeSelected!.startDate;
    const parts = dateString.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);

    const date = new Date(year, month, day);

    return date ?? null;
  }

  return typeDate === "range" ? (
    <DateRangePicker
      locale={{
        sunday: "Dom",
        monday: "Seg",
        tuesday: "Ter",
        wednesday: "Qua",
        thursday: "Qui",
        friday: "Sex",
        saturday: "Sáb",
        ok: "Ok",
        today: "Hoje",
        yesterday: "Ontem",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",

        formattedMonthPattern: "MMMM yyyy",
        formattedDayPattern: "dd/MM/yyyy",
        // for DateRangePicker
        last7Days: "Últimos 7 dias",
        dateLocale: ptBR,
      }}
      showOneCalendar
      value={dateSelected}
      format={"dd/MM/yyyy"}
      onChange={(value: any) => {
        if (!value) {
          return;
        }
        setDateSelected([value[0], value[1]]);
        const startDate = value[0].toISOString().split("T")[0];
        const endDate = value[1].toISOString().split("T")[0];
        setDateRangeSelected({
          startDate,
          endDate,
        });
      }}
      isoWeek={true}
      appearance="default"
      color="#3F3524"
      placeholder="Default"
      style={{ width: 230, zIndex: 9999 }}
    />
  ) : (
    <DatePicker
      value={dateSelected ? value() : null}
      format={"dd/MM/yyyy"}
      onChangeCapture={(e: any) => {
        const inputValue = e.target.value.trim(); 
        const datePattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})[\d_]$/; 

        if (!e.target.value) {
          setDateSelected(null);
          setDateRangeSelected(null);
          return;
        }

        if (!datePattern.test(inputValue)) {
          return;
        }

        const [, day, month, year] = inputValue.match(datePattern); // Extrair partes da data
        const formattedDate = new Date(`${year}-${month}-${day}`); // Criar objeto Date

        setDateSelected([formattedDate, formattedDate]);
        setDateRangeSelected({
          startDate: formattedDate.toISOString().split("T")[0],
          endDate: formattedDate.toISOString().split("T")[0],
        });
      }}
      onChange={(value: any) => {
        if (!value) {
          setDateSelected(null);
          setDateRangeSelected(null);
          return;
        }
        setDateSelected([value, value]);
        const startDate = value.toISOString().split("T")[0];
        const endDate = value.toISOString().split("T")[0];
        setDateRangeSelected({
          startDate,
          endDate,
        });
      }}
      isoWeek={true}
      oneTap={true}
      editable={true}
      size="lg"
      appearance="default"
      // color="#3F3524"
      placeholder="dd/mm/aaaa"
      style={{ zIndex: 9999 }}
      
    />
  );
};

export default DateRangerPicker;