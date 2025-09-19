import { useState } from "react";

export default function BrokerageTabs() {
  const [activeTab, setActiveTab] = useState("Equity");

  const tableData = {
    Equity: [
      {
        label: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.02% on the sell side",
          <ul key="stt-options" className="list-disc ml-4">
            <li>0.125% of intrinsic value on exercised options</li>
            <li>0.1% on sell side (on premium)</li>
          </ul>,
        ],
      },
      {
        label: "Transaction charges",
        values: [
          <>
            NSE: 0.00297%
            <br />
            BSE: 0.00375%
          </>,
          <>
            NSE: 0.00297%
            <br />
            BSE: 0.00375%
          </>,
          <>
            NSE: 0.00173%
            <br />
            BSE: 0
          </>,
          <>
            NSE: 0.03503% (on premium)
            <br />
            BSE: 0.0325% (on premium)
          </>,
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
    ],
    Currency: [
      {
        label: "Brokerage",
        values: [
          "-",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: ["-", "-", "-", "-"],
      },
      {
        label: "Transaction charges",
        values: [
          <>
            NSE: 0.00223%
            <br />
            BSE: 0.00275%
          </>,
          <>
            NSE: 0.00223%
            <br />
            BSE: 0.00275%
          </>,
          <>
            NSE: 0.00173%
            <br />
            BSE: 0
          </>,
          <>
            NSE: 0.0325%
            <br />
            BSE: 0.03%
          </>,
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
    ],
    Commodity: [
      {
        label: "Brokerage",
        values: [
          "-",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: ["-", "-", "-", "-"],
      },
      {
        label: "Transaction charges",
        values: [
          "MCX: 0.002% on buy & sell",
          "MCX: 0.002% on buy & sell",
          "MCX: 0.0015% on buy side",
          "MCX: 0.03% on premium",
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
    ],
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="p-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-4">
          {Object.keys(tableData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full text-sm">
            <thead>
              <tr>
                <th className="border px-4 py-2 bg-gray-100"></th>
                <th className="border px-4 py-2 bg-gray-100">
                  Equity delivery
                </th>
                <th className="border px-4 py-2 bg-gray-100">
                  Equity intraday
                </th>
                <th className="border px-4 py-2 bg-gray-100">F&O - Futures</th>
                <th className="border px-4 py-2 bg-gray-100">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              {tableData[activeTab].map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 font-semibold">
                    {row.label}
                  </td>
                  {row.values.map((value, i) => (
                    <td key={i} className="border px-4 py-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
}
