import { ChartPie, ClipboardCheck, ClipboardList, Home } from "lucide-react";
import { ROUTES } from "./routes";
 
export const HEADER_LINKS = [
    {title: 'main', link:ROUTES.MAIN, icon: Home },
    {title: 'task', link:ROUTES.TASKS, icon: ClipboardList },
    {title: 'completed', link:ROUTES.COMPLETED, icon: ClipboardCheck},
    {title: 'statistics', link:ROUTES.STATISTICS, icon: ChartPie}
]


export const HEADERS = {
    'Content-Type': 'application/json',
}
