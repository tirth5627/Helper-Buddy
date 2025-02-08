import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput: React.FC = () => {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"in"} 
      onlyCountries={["in"]} 
      disableDropdown={true} 
      value={phone}
      onChange={(e:any) => setPhone(e.target.value)}
      inputClass="bg-zinc-800/50 border border-zinc-700 text-white placeholder:text-zinc-400 w-full p-2 rounded-md"
      containerClass="w-full"
    />
  );
};

export default PhoneNumberInput;
