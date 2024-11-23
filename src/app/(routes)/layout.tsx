import Footer from "../_components/footer";

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
    return (

            <>
                {children}
                <Footer/>
            </>

    );
}
