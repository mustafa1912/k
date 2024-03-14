import React from 'react'
import style_ar from './Tables.module.css'
import style_en from './Tables_en.module.css'
import { useTranslation } from 'react-i18next';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

function Master() {
    const { i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en

    const data = [
        {
            id: '1',
            name: 'ا.م.د/ مروة عبدالفتاح عبدالرحمن	',
            type: '   دكتوراه ',
            side: ' كلية الهندسة - جامعة الأسكندرية	 ',
            date: '2013-01-01 ',
        },
        {
            id: '2',
            name: 'ا.م.د/ مروة عبدالفتاح عبدالرحمن	',
            type: '   دكتوراه ',
            side: ' كلية الهندسة - جامعة الأسكندرية	 ',
            date: '2013-01-01 ',
        }]

    const statusBodyTemplate = (data) => {
        return <Tag value={data.type} severity='primary' />;
    };

    return (
        <section className={`${style.Tables} py-3 py-sm-5`}   >
            <div className='container'>
                <h4 className={`${style.head} p-2 rounded`}>   رسائل الماجستير والدكتوراة     </h4>
                <DataTable value={data} size={'small'} showGridlines removableSort stripedRows paginator rows={10} rowsPerPageOptions={[10, 25, 50]}>
                   <Column body={(data, options) => options.rowIndex + 1} className='text-center' header="#" sortable ></Column>
                    <Column field='type' header=" اسم الباحث " sortable  ></Column>
                    <Column body={statusBodyTemplate} header="  نوع الرسالة  " sortable  ></Column>
                    <Column field="side" header=" جهة المنح " sortable  ></Column>
                    <Column body={statusBodyTemplate} header=" تاريخ المنح " sortable  ></Column>
                </DataTable>
            </div>
        </section>
    )
}

export default Master
