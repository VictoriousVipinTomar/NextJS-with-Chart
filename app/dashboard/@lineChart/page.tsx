"use client";

import React from "react";
import { Chart } from "react-charts";
import { AxisOptions } from "react-charts/types/types";

type DataPoint = {
    date: Date;
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
            { date: new Date("2023-01-01"), value: 10 },
            { date: new Date("2023-02-01"), value: 15 },
            { date: new Date("2023-03-01"), value: 20 },
        ],
    },
    {
        label: "Series 2",
        data: [
            { date: new Date("2023-01-01"), value: 5 },
            { date: new Date("2023-02-01"), value: 12 },
            { date: new Date("2023-03-01"), value: 18 },
        ],
    },
];

export default function LineChart() {
    const primaryAxis = React.useMemo(
        (): AxisOptions<DataPoint> => ({
            getValue: (datum) => datum.date,
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
            <h2>Line Chart</h2>
            <Chart
                options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                }}
            />
        </div>
    );
}
