class DocumentExporter{
    export(content){
        console.log("Default export:", content);
    }
}

class PDFExported extends DocumentExporter{
    export(content){
        console.log("Exporting PDF:", content);
    }
}

class DocxExporter extends DocumentExporter{
    export(content){
        console.log("Exporting DOCX:", content);
    }
}

class TxtExporter extends DocumentExporter{
    export(content){
        console.log("Exporting Txt:",content);
    }
}

function exportFile(content, exporter){
    exporter.export(content);
}

let content = "This is Private Document";

exportFile(content, new PDFExported());
exportFile(content, new DocxExporter());
exportFile(content, new TxtExporter());