"use client";

import React from "react";
import { Chart } from "react-charts";
import { AxisOptions } from "react-charts/types/types";

type DataPoint = {
    category: string;
    value: number;
};

type Series = {
    label: string;
    data: DataPoint[];
};

const data: Series[] = [
    {
        label: "Series 1",
        data: [
            { category: "A", value: 10 },
            { category: "B", value: 15 },
            { category: "C", value: 20 },
        ],
    },
    {
        label: "Series 2",
        data: [
            { category: "A", value: 5 },
            { category: "B", value: 12 },
            { category: "C", value: 18 },
        ],
    },
];

export default function BarChart() {
    const primaryAxis = React.useMemo(
        (): AxisOptions<DataPoint> => ({
            getValue: (datum) => datum.category,
        }),
        []
    );

    const secondaryAxes = React.useMemo(
        (): AxisOptions<DataPoint>[] => [
            {
                getValue: (datum) => datum.value,
            },
        ],
        []
    );

    return (
        <div style={{ height: "300px" }}>
            <h2>Bar Chart</h2>
            <Chart
                options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                    defaultColors: ["#4e79a7", "#f28e2c"],
                }}
            />
        </div>
    );
}
