import { Stack, Box } from "@mui/material"
import { TodoDetail } from "./TodoDetail"

export const Card = () => {

    return (
        <>
        <style>
                {`@keyframes fadeIn {
                from {
                    opacity: 0,
                    transform: translateY(20px);
                }
                to {
                    opacity: 1,
                    transform: translateY(0);
                }
            }`}
        </style>
            <TodoDetail />
            <TodoDetail />
        </>
    )
}