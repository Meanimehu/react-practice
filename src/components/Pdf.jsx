import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
    const pdfUrl = 'https://www.mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf';
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handlePageChange = (offset) => {
        setPageNumber(prevPageNumber => {
            const newPageNumber = prevPageNumber + offset;
            if (newPageNumber < 1 || newPageNumber > numPages) {
                return prevPageNumber;
            }
            return newPageNumber;
        });
    };

    return (
        <div>
            <Document 
                file={pdfUrl} 
                onLoadSuccess={onDocumentLoadSuccess} 
                onLoadError={console.error}
            >
                <Page 
                    pageNumber={pageNumber} 
                    onLoadError={console.error} 
                />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            <button 
                onClick={() => handlePageChange(-1)} 
                disabled={pageNumber === 1}
            >
                Previous
            </button>
            <button 
                onClick={() => handlePageChange(1)} 
                disabled={pageNumber === numPages}
            >
                Next
            </button>
        </div>
    );
};

export default PDFViewer;
