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
    'Authorization': 'Bearer b55f70b93383c09fb9b9cce07084b49efb500b125f75237f402b95b1252480ea9b4f92912c689493cea47639a19c9fe342a8480482cc75c470047a9d9a262c44d27dd4b513bd32b2d262fe41524f174080c9e2821013a48ac9de7fbdb0d73b3f44c8d179e446cd8f67853b17cfd1c6f1e24180b556a8657c673057336198df68',
}