import DashboardSkeleton from "@/app/ui/skeletons";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
    return (
        <>
            <DashboardSkeleton/>
            <LatestInvoicesSkeleton/>
        </>
    );
    
}