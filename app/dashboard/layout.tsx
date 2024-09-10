export default function Layout({
    children,
    lineChart,
    barChart,
}: {
    children: React.ReactNode;
    lineChart: React.ReactNode;
    barChart: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <div className="row">
                <div className="col-md-6 mb-4">{lineChart}</div>
                <div className="col-md-6 mb-4">{barChart}</div>
            </div>
        </div>
    );
}
