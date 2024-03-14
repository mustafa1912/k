import React, { useState } from 'react'
import style_ar from './Tables.module.css'
import style_en from './Tables_en.module.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { FilterMatchMode, } from 'primereact/api';


function Table_decisions({ api, langState, data, t, i18n }) {
    let style = langState ? style_ar : style_en

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [visible, setVisible] = useState(false);
    const [dataModal, setDataModal] = useState(null);
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

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const dataNumberTemplate = (data, options) => {
        return <Tag className='p-2 px-3' value={data.number} severity={options.rowIndex % 2 === 0 ? "info" : ""} ></Tag>;
    };
    const dataDateTemplate = (data, options) => {
        return <Tag className='p-2' icon="pi pi-calendar-plus mx-1" value={data.date} severity={options.rowIndex % 2 === 0 ? "warning" : "danger"}   ></Tag >;
    };
    const statusFileTemplate = (data) => {
        // هنا بقول لما اضفغط علي الزرار يظهر الموديل و يضيف الداتا للمتغير 
        return (<Button icon="pi pi-file-pdf" severity={"secondary"} raised className='p-2 px-1' size='small' onClick={() => { setVisible(true); setDataModal(data); }} >
        </Button>);
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
        <section className={`${style.Tables} py-3 py-sm-5`}   >
            <div className='container'>
                <h4 className={`${style.head} p-2 rounded`}>   محاضر و مقرارات   </h4>
                {data &&
                    <DataTable value={data}
                        size="small"
                        selection={selectedProducts}
                        onSelectionChange={e => setSelectedProducts(e.value)}
                        globalFilterFields={['name_ar', 'name_en', 'date', 'number']}
                        filters={filters} header={header} reorderableRows showGridlines dataKey="id" emptyMessage="لاتوجد بيانات."
                        className="datatable-responsive" currentPageReportTemplate="إظهار {first} إلى {last} من إجمالي {totalRecords} من المشاركات" paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        rows={10} rowsPerPageOptions={[10, 20, 50]} >
                        <Column body={(data, options) => options.rowIndex + 1} className='text-center' header="#" sortable ></Column>
                        <Column field={`${langState ? 'name_ar' : 'name_en'}`} header=" المحضر " sortable  ></Column>
                        <Column body={dataNumberTemplate} header=" رقم المحضر " sortable  ></Column>
                        <Column body={dataDateTemplate} header=" التاريخ " sortable  ></Column>
                        <Column body={statusFileTemplate} header=" المرفق " sortable  ></Column>
                    </DataTable>
                }
            </div>
            <React.Fragment>
                {dataModal &&
                    <Dialog header={langState ? dataModal.name_ar : dataModal.name_en} visible={visible} onHide={() => setVisible(false)} className={`Dialog mt-3`}
                        breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                        <React.Fragment>
                            {dataModal.file}
                            <iframe width="100%" height="800px" src={imgSrc(dataModal.file)} />
                        </React.Fragment>
                    </Dialog>
                }
            </React.Fragment>
        </section>
    )
}

export default Table_decisions
