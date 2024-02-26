"use client";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { onReload } from "@/redux/slices/userSlice";

const ChildComponent = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onReload());
  }, []);

  return <>{children}</>;
};

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store()}>
      <ChildComponent>{children}</ChildComponent>
    </Provider>
  );
};
