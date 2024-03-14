import { Skeleton } from 'primereact/skeleton'
import React from 'react'

function SkeletonLoader() {
    return (
        <React.Fragment>
            <div className='container'>
                <Skeleton className="mb-2" />
                <Skeleton width="10rem" className="mb-2" />
                <Skeleton width="5rem" className="mb-2" />
                <Skeleton height="2rem" className="mb-2" />
                <Skeleton width="10rem" height="4rem" />
            </div>
        </React.Fragment>
    )
}

export default (SkeletonLoader)
