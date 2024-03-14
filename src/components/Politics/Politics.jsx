import React from 'react'
import style_ar from './Politics.module.css'
import style_en from './Politics_en.module.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
 

function Politics({ api, langState, data, t, i18n, dataSeo }) {
    let style = i18n.language === 'ar' ? style_ar : style_en

    const statusBodyTemplateName = (data) => {
        return <React.Fragment> {langState ? data.name_ar : data.name_en} </React.Fragment>;
    };
    const statusBodyTemplate = (data) => {
        return <NavLink to={data.link} target='_blank' className='p-0'> <Button icon="pi pi-link" className='p-1' severity="secondary" text raised outlined aria-label="الرابط" size='small' /> </NavLink>;
    };

    return (
        <section className={`${style.Tables} py-5`}   >
            <div className='container'>
                <h4 className={`${style.head} p-2 rounded`}> {dataSeo.title} </h4>
                <DataTable value={data} size={'small'} showGridlines removableSort stripedRows paginator rows={10} rowsPerPageOptions={[10, 25, 50]}>
                    <Column body={(data, options) => options.rowIndex + 1} header="id" sortable  ></Column>
                    <Column body={statusBodyTemplateName} className='text-end' header={t('name')} sortable  ></Column>
                    <Column body={statusBodyTemplate} header={t('link')} sortable  ></Column>
                </DataTable>
            </div>
        </section>
    )
}

export default Politics
