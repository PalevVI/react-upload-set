import { randomKey } from "./components/UploadSet/randomKey";
import { UploadSet } from "./components/UploadSet/UploadSet";
import { TUploadSetItem } from "./components/UploadSetItem/types";
import { useState } from 'react'

function App() {
    const initItems: TUploadSetItem[] = [
        {
            key: "1",
            fileName: "test",
            markers: [
                {
                    label: "test",
                    text: "test",
                },
            ],
            state: "Complete",
        },
        {
            key: "2",
            fileName: "test2",
            state: "Complete",
        },
        {
            key: "3",
            fileName: "test3",
            state: "Complete",
        },
    ];

    const [items, setItems] = useState(initItems)


    const simulateQuery = () =>
        new Promise((resolve) => setTimeout(resolve, 1500));

    return (
        <>
            <UploadSet
                items={items}
                onUpload={async (file) => {
                    await simulateQuery()
                    setItems((prev) => [...prev, { key: randomKey(), fileName: file.name, state: 'Complete' }])
                }}
                onRemove={async ({ key }) => {
                    await simulateQuery()
                    setItems((prev) => prev.filter((item) => item.key !== key)) 
                }}
            />
        </>
    );
}

export default App;
