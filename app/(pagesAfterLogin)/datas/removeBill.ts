import { instance } from "@/app/axios/instance";
import { Dispatch, SetStateAction } from "react";
import { myBills } from "../home/page";

export const removeBill = async (
  id: number,
  fetchDataAndSetBills: Dispatch<SetStateAction<any>>,
  setBills: Dispatch<SetStateAction<myBills[]>>
) => {
  try {
    const userName = localStorage.getItem("name");
    const res = await instance.put(`deleteOneBill/${userName}`, { id });
    console.log(res);
    fetchDataAndSetBills(setBills);
  } catch (error) {
    console.log(error);
  }
};
