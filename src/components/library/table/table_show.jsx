import React from 'react'
import style_ar from './table_show.module.css'
import style_en from './table_show_en.module.css'
import { useTranslation } from 'react-i18next';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import Links from '../links/links';

function Table_show() {
    const { Translation, i18n } = useTranslation();
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
    const dataBodyTemplate = (data) => {
        return <Tag value={data.date} severity='info' />;
    };
    return (
        <section className={`${style.Master} py-5`}   >
            <section className={`${style.library_information} library_information my-5`}   >
                <div className="container">
                    <div className="row m-0 justify-content-evenly">
                        <div className="col-12 col-md-8">
                            <h4 className={`${style.head} p-2 rounded`}>   الكتب المتاحة بالمعهد    </h4>
                            <DataTable value={data} size={'small'} showGridlines removableSort stripedRows paginator rows={10} rowsPerPageOptions={[10, 25, 50]}>
                               <Column body={(data, options) => options.rowIndex + 1} className='text-center' header="#" sortable ></Column>
                                <Column field='type' header=" اسم الكتاب   " sortable  ></Column>
                                <Column body={statusBodyTemplate} header="  المؤلف    " sortable  ></Column>
                                <Column field="side" header="    عمليات  " sortable  ></Column>
                            </DataTable>
                        </div>
                        <div className="col-12 col-md-4 px-4">
                            <Links />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Table_show
