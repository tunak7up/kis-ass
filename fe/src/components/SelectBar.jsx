import NativeSelectDemo from "./NativeSelectDemo";
import YearMonthPicker from "./YearMonthPicker";

function SelectBar() {
  return (
    <div className="select-bar">
      <NativeSelectDemo 
        label="Vùng" 
        name="Vùng" 
        defaultValue={30}
        options={[
          { value: 1, label: "Miền Bắc" },
          { value: 2, label: "Miền trung" },
          { value: 3, label: "Miền Nam" },
        ]}
      />

      <NativeSelectDemo 
        label="Khu vực" 
        name="Khu vực" 
        defaultValue="hn"
        options={[
          { value: "hn", label: "Hà Nội" },
          { value: "36", label: "Thanh Hóa" },
          { value: "18", label: "Nam Định" },
          { value: "hcm", label: "Hồ Chí Minh"}
        ]}
      />

      <NativeSelectDemo 
        label="NPP" 
        name="npp" 
        defaultValue="1"
        options={[
          { value: "1", label: "12" },
          { value: "2", label: "Ba" },
          { value: "3", label: "5" },
        ]}
      />

      <NativeSelectDemo 
        label="Route" 
        name="route" 
        defaultValue="1"
        options={[
          { value: "1", label: "34" },
          { value: "2", label: "Ba" },
          { value: "3", label: "5" },
        ]}
      />

      <YearMonthPicker />
    </div>
  );
}
export default SelectBar;