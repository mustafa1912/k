import React from 'react'
import style_ar from './Tables.module.css'
import style_en from './Tables_en.module.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, } from 'primereact/api';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

import { NavLink } from 'react-router-dom';

function Table_important2({ api, langState, data, t, i18n, dataSeo }) {
    let style = langState ? style_ar : style_en

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [visible, setVisible] = useState(false);
    const [dataModal, setDataModal] = useState(null);

    // filtter
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name_ar': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'name_en': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'number': { value: null, matchMode: FilterMatchMode.IN },
        'date': { value: null, matchMode: FilterMatchMode.EQUALS },
        'file': { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    // const [loading, setLoading] = useState(false);

    //  get url photo
    const imgSrc = (photo) => {
        if (photo)
            return (api + 'public//storage/' + photo.replace('public', ''))
    }
    const statusImgTemplate = (data) => {
        // علشان اظهر الصور
        return (<AvatarGroup style={{ direction: 'ltr' }}>
            <Avatar image={imgSrc(data.logo)} size="large" shape="circle" />
        </AvatarGroup>);
    };

    const statusFileTemplate = (data) => {
        // هنا بقول لما اضفغط علي الزرار يظهر الموديل و يضيف الداتا للمتغير 
        return (<NavLink to={data.link} target='_blank' className='p-0'> <Button icon="pi pi-link" className='p-1' severity="secondary" text raised outlined aria-label="الرابط" size='small' /> </NavLink>);
    };

    // Filter
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    }
    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} size={'small'} className='p-2' onChange={onGlobalFilterChange} placeholder=" بحث " />
                </span>
                <Button type="button" icon="pi pi-filter-slash" size={'small'} className='p-2 px-3' label="الغاء" severity="secondary" outlined onClick={clearFilter} />
            </div>
        );
    };

    const clearFilter = () => {
        initFilters();
    };

    const initFilters = () => {
        setFilters({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'name_ar': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            'name_en': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'number': { value: null, matchMode: FilterMatchMode.IN },
            'date': { value: null, matchMode: FilterMatchMode.EQUALS },
            'file': { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue('');
    };
    console.log(dataModal)
    const header = renderHeader();
    return (
        <section className={`${style.Tables} py-3 py-sm-5`}   >
            <div className='container'>
                <h4 className={`${style.head} p-2 rounded`}> {dataSeo.title}  </h4>
                <DataTable value={data} size="small"
                    selection={selectedProducts}
                    onSelectionChange={e => setSelectedProducts(e.value)}
                    globalFilterFields={['name_ar', 'name_en', 'date', 'number']}
                    filters={filters} header={header} reorderableRows showGridlines dataKey="id" emptyMessage="لاتوجد بيانات."
                    className="datatable-responsive" currentPageReportTemplate="إظهار {first} إلى {last} من إجمالي {totalRecords} من المشاركات" paginator
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    rows={10} rowsPerPageOptions={[10, 20, 50]} >
                    <Column body={(data, options) => options.rowIndex + 1} className='text-center' header="#" sortable ></Column>
                    <Column field={`${langState ? 'name_ar' : 'name_en'}`} header=" الوصف " sortable className={`${langState && 'text-end'}`} style={{ whiteSpace: 'normal' }}  ></Column>
                    <Column body={statusImgTemplate} header=" الصور " sortable  ></Column>
                    <Column body={statusFileTemplate} header=" الملف " sortable  ></Column>
                </DataTable>
            </div>

        </section>
    )
}

export default Table_important2
