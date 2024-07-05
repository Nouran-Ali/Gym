import React from 'react'
import { Tabs } from 'antd';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'البيانات',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'المقاسات',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'الحضور',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'ملاحظات',
        children: 'Content of Tab Pane 4',
    },
];

const ShowUser = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default ShowUser
