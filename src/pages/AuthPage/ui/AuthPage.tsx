import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Page } from "@widgets/Layouts";
import { PawnIcon } from "@shared/assets/icons";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  ThemeToggle,
} from "@shared/components";
import { useLoginContext } from "@shared/context";

import { QUOTES, QUOTES_LENGTH } from "../config/constants";
import { Quote } from "../config/types";

export const AuthPage: FC = () => {
  const navigate = useNavigate();

  const {
    firstPlayerName,
    setFirstPlayerName,
    secondPlayerName,
    setSecondPlayerName,
  } = useLoginContext();

  const [invalidFirstPlayerName, setInvalidFirstPlayerName] = useState("");
  const [invalidSecondPlayerName, setInvalidSecondPlayerName] = useState("");

  const [currentQuote, setCurrentQuote] = useState<Quote>(QUOTES[0]);

  useEffect(() => {
    setInterval(() => {
      setCurrentQuote(QUOTES[Math.floor(Math.random() * QUOTES_LENGTH)]);
    }, 5000);
  }, []);

  return (
    <Page>
      <Container className="flex justify-between h-screen p-16">
        <div className="w-1/2 h-full p-10 text-white flex flex-col justify-between bg-zinc-900 rounded-l-lg">
          <div className="text-lg font-medium flex items-center">
            <PawnIcon /> Chess
          </div>

          <blockquote className="flex flex-col gap-2">
            <p className="text-lg">“{currentQuote.quote}.”</p>
            <footer className="text-sm">{currentQuote.author}</footer>
          </blockquote>
        </div>

        <div className="w-1/2 flex flex-col border shadow ">
          <div className="flex justify-end p-4">
            <ThemeToggle />
          </div>

          <div className="w-full flex flex-1  justify-center items-center">
            <Card className="w-[350px] text-white bg-black border-0">
              <CardHeader>
                <CardTitle>Начните игру</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <Label htmlFor="firstPlayerName">Игрок белыми</Label>
                <Input
                  id="firstPlayerName"
                  placeholder="Введите имя первого игрока"
                  value={firstPlayerName}
                  onChange={(event): void =>
                    setFirstPlayerName(event.target.value)
                  }
                  autoComplete="off"
                />
                <Label className="text-red-400 pb-2">
                  {invalidFirstPlayerName}
                </Label>

                <Label htmlFor="secondPlayerName">Игрок черными</Label>
                <Input
                  id="secondPlayerName"
                  placeholder="Введите имя второго игрока"
                  value={secondPlayerName}
                  onChange={(event): void =>
                    setSecondPlayerName(event.target.value)
                  }
                  autoComplete="off"
                />
                <Label className="text-red-400 pb-2">
                  {invalidSecondPlayerName}
                </Label>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button
                  variant="ghost"
                  onClick={(): void => {
                    setFirstPlayerName("");
                    setSecondPlayerName("");
                    setInvalidFirstPlayerName("");
                    setInvalidSecondPlayerName("");
                  }}
                >
                  Сбросить
                </Button>

                <Button
                  variant="outline"
                  onClick={(): void => {
                    if (firstPlayerName.length < 2) {
                      setInvalidFirstPlayerName("Слишком короткое имя");
                      setInvalidSecondPlayerName("");
                      return;
                    }
                    if (secondPlayerName.length < 2) {
                      setInvalidSecondPlayerName("Слишком короткое имя");
                      setInvalidFirstPlayerName("");
                      return;
                    }
                    setInvalidFirstPlayerName("");
                    setInvalidSecondPlayerName("");
                    navigate("/chess");
                  }}
                >
                  Играть
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </Page>
  );
};
