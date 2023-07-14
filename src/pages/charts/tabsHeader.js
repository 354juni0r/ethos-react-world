import React from 'react'

const TabsHeader = () => {
  return (
    <div className='form-group'>
        <div className='row'>
        <div className='col-md-3'>
            <div className="card card-success">
            <div className="card-header">
                <p className="card-title">Omset Sampai Last Update</p>
            </div>
            <div className="card-body">
                The body of the card
            </div>
            </div>
        </div>
        <div className='col-md-3'>
            <div className="card card-success">
            <div className="card-header">
                <p className="card-title">Perkiraan Omset Akhir Bulan</p>
            </div>
            <div className="card-body">
                The body of the card
            </div>
            </div>
        </div>
        <div className='col-md-3'>
            <div className="card card-success">
            <div className="card-header">
                <p className="card-title">Selisih Kumulatif Target & Omset</p>
            </div>
            <div className="card-body">
                The body of the card
            </div>
            </div>
        </div>
        <div className='col-md-3'>            
            <div className="card card-success">
            <div className="card-header">
                <p className="card-title">Kekurangan Target</p>
            </div>
            <div className="card-body">
                The body of the card
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TabsHeader
