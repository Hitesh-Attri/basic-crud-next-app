"use client";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
// import { Button } from "./ChakraComponents/Chakra";
import { Box, Button } from "@chakra-ui/react";

export default function Home() {
  const [text, SetText] = useState("");
  const [data, setData] = useState([{}]);

  useLayoutEffect(() => {
    getDataFunc();
  }, []);

  const getDataFunc = async () => {
    // axios
    //   .get("/api/get-data")
    //   .then((res) => {
    //     console.log(res.data);
    //     setData(res.data.list);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("something went wrong");
    //   });

    try {
      let res = await fetch("/api/get-data", {
        cache: "no-store",
      });

      res = await res.json();
      console.log(res);
      // setData(res.list);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
  const postFunc = async () => {
    axios
      .post("/api/post-data", { text })
      .then((res) => {
        console.log(res.data);
        SetText("");
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  const test = async () => {
    axios.get("/api/test").then((res) => {
      console.log(res);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div> */}
      <Box
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Button onClick={() => getDataFunc()}>Get</Button>
        <Box border={"1px solid black"}>
          <input
            type="text"
            value={text}
            onChange={(e) => SetText(e.target.value)}
          />
          <Button onClick={() => postFunc()}>Post</Button>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-start"
          flexDirection={"column"}
          alignItems="flex-start"
        >
          {data.map((item, i) => {
            return <p key={i}>{item.text}</p>;
          })}
        </Box>
      </Box>
    </main>
  );
}
