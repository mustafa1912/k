import React, { useState } from 'react'
import style_ar from './Tables.module.css'
import style_en from './Tables_en.module.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, } from 'primereact/api';
import { Chip } from 'primereact/chip';

function Table_rewords({ api, langState, data, t, i18n }) {
    let style = langState ? style_ar : style_en

    const [selectedProducts, setSelectedProducts] = useState(null);
    // const toast = useRef(null);
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


    const dataDoctorTemplate = (data) => {
        return <Chip label={langState ? data.doctors.name_ar : data.doctors.name_en} icon="pi pi-user mx-2" />;
    };
    const dataDateTemplate = (data, options) => {
        return <Tag className='p-2' icon="pi pi-calendar-plus mx-1" value={data.date} severity={options.rowIndex % 2 === 0 ? "warning" : "danger"}   ></Tag >;
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

    const header = renderHeader();

    return (
        <section className={`${style.Tables} py-5`}   >
            <div className='container'>
                <h4 className={`${style.head} p-2 rounded`}>    جوائز النشر     </h4>
                <DataTable value={data} size="small"
                    selection={selectedProducts}
                    onSelectionChange={e => setSelectedProducts(e.value)}
                    globalFilterFields={['name_ar', 'name_en', 'date', 'number']}
                    filters={filters} header={header} reorderableRows showGridlines dataKey="id" emptyMessage="لاتوجد بيانات."
                    className="datatable-responsive" currentPageReportTemplate="إظهار {first} إلى {last} من إجمالي {totalRecords} من المشاركات" paginator
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    rows={10} rowsPerPageOptions={[10, 20, 50]} >
                   <Column body={(data, options) => options.rowIndex + 1} className='text-center' header="#" sortable ></Column>
                    <Column field={`${langState ? 'name_ar' : 'name_en'}`} header=" الاسم " sortable className={`${langState && 'text-end'}`}  ></Column>
                    <Column body={dataDoctorTemplate} header=" عضو هيئة التدريس " sortable className={`${langState && 'text-end'}`} ></Column>
                    <Column body={dataDateTemplate} header=" التاريخ " sortable  ></Column>
                </DataTable>
            </div>
        </section >
    )
}

export default Table_rewords
