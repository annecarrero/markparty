"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    CalendarClock,
    Menu,
    Star,
    User,
    History,
    LogOut,
    LogIn,
    CalendarClockIcon,
    HistoryIcon,
    StarIcon,
    UserCircle,
    CalendarDays,
    Clock,
    ClipboardList,
} from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Adicione o componente Skeleton
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white px-6 py-3">
            <span
                onClick={() => router.push("/")}
                className="text-lg font-bold flex flex-col leading-tight"
            >
                MARK
                <span className="text-gray-500 text-base">PARTY</span>
            </span>

            {/* Estado de loading */}


            <Sheet>
                <SheetTrigger className="flex items-center gap-2 p-2 border border-gray-300 rounded-full shadow-sm">
                    <Menu className="w-6 h-6 text-gray-600" />
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={"https://avatars.githubusercontent.com/u/125596560?v=4"} />
                        <AvatarFallback className="bg-secondary">
                            {"U"}
                        </AvatarFallback>
                    </Avatar>
                </SheetTrigger>
                <SheetContent side="right" className="p-6 pb-8">
                    <SheetTitle className="flex items-center gap-4 mb-6">
                        <Avatar className="w-12 h-12 border-2 border-secondary">
                            <AvatarImage src={"https://avatars.githubusercontent.com/u/125596560?v=4"} />
                            <AvatarFallback className="bg-secondary">
                                {"U"}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-primary">annely</p>
                        </div>
                    </SheetTitle>

                    <ul className="flex flex-col h-full space-y-3 pb-10">
                        <li
                            onClick={() => router.push("/")}
                            className="p-2 flex items-center gap-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                            <UserCircle className="w-5 h-5" /> Meu Perfil
                        </li>
                        <li
                            onClick={() => router.push("/")}
                            className="p-2 flex items-center gap-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                            <CalendarDays className="w-5 h-5" /> Meus Eventos
                        </li>
                        <li
                            onClick={() => router.push("/")}
                            className="p-2 flex items-center gap-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                            <Clock className="w-5 h-5" /> Eventos em Andamento
                        </li>
                        <li
                            onClick={() => router.push("/")}
                            className="p-2 flex items-center gap-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                            <ClipboardList className="w-5 h-5" /> Histórico de Avaliações
                        </li>


                        {/* Espaçador que empurra o último item para o final */}
                        <div className="flex-grow"></div>

                        {/* Botão de sair fixado no final */}
                        <li
                            onClick={async () => {
                                router.push("/a/login");
                            }}
                            className="p-2 flex items-center gap-2 hover:bg-red-100 text-red-600 rounded-md cursor-pointer"
                        >
                            <LogOut className="w-5 h-5" /> Sair
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

