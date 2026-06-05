import React, { useEffect, useState } from "react";
import axios from "axios";
import { successToast, failureToast } from "../utils/toast";
import Skeleton from "react-loading-skeleton";

const User = () => {
  const [tempLoading, setTempLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setTempLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await axios.get("http://localhost:4000/api/auth/getall");

        if (res.data.success) {
          setData(res.data.alluser);
          successToast(res.data.message);
          setTempLoading(false);
        } else {
          failureToast(res.data.message);
        }
      } catch (error) {
        failureToast(error.response?.data?.message || "Something went wrong");
      }
    };
    getAllUsers();
  }, []);

  if (tempLoading) {
    if (tempLoading) {
      return (
        <div className="p-4">
          <Skeleton height={32} width={100} className="mb-4" />

          {[...Array(2)].map((_, index) => (
            <div key={index} className="border rounded-lg p-4 mb-3 shadow-sm">
              <Skeleton height={20} width={150} className="mb-2" />

              <Skeleton height={16} width={250} />
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {data.map((user) => (
        <div key={user._id} className="border rounded-lg p-4 mb-3 shadow-sm">
          <h2 className="font-semibold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
