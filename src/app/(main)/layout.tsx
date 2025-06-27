import PublicNavbar from "@/components/PublicNavbar";
import { currentUser } from "@clerk/nextjs/server";

type MainLayoutParameters = {
    children: React.ReactNode;
};

export default async function MainLayout({ children }: MainLayoutParameters) {
    const user = await currentUser();

    return (
        <main className="relative">
            {user ? <div>Private</div> : <PublicNavbar />}
            <section className="pt-36">{children}</section>
        </main>
    );
}
