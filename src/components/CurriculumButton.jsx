import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CurriculumButton({ title, imageUrl, buttonText = "View Curriculum" }) {
  const [open, setOpen] = React.useState(false);
  
  // State lu thoti spelling mistakes enduku ani oka normal JavaScript Ref ni vadutunnam bro
  const downloadTracker = React.useRef(false);

  const imagesArray = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

  // --- BLOB DOWNLOAD LOGIC ---
  const handleButtonClick = async () => {
    // 1. Popup eppudu click chesina open avvali
    setOpen(true);

    // 2. browser session lo okasari download aithe, inkisari download avvanivvadu
    if (downloadTracker.current === true) return;

    const safeTitle = title ? title.replace(/\s+/g, '-') : 'Course';

    // imagesArray lo unna prathi image ni download cheyadanki
    for (let index = 0; index < imagesArray.length; index++) {
      try {
        const imgSrc = imagesArray[index];

        const response = await fetch(imgSrc, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `${safeTitle}-Curriculum-${index + 1}.jpg`;
        
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Blob download failed, fallback to normal click:", error);
        
        const link = document.createElement("a");
        link.href = imagesArray[index];
        link.download = `${safeTitle}-Curriculum-${index + 1}.jpg`;
        link.click();
      }
    }

    // 3. Download avvagane true set chestunam, so next time click chesinapudu download trigger avvadu
    downloadTracker.current = true;
  };

  return (
    <div style={{ margin: '15px', textAlign: 'center' }}>
      <Button 
        onClick={handleButtonClick}
        sx={{
          color: 'white',
          padding: '10px 0px',
          borderRadius: '16px',
       
          fontSize: '1.2rem',
          textTransform: 'none',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
          minWidth: '250px',
       
            background: 'transparent',
            transform: 'scale(1.03)',
            transition: 'all 0.2s ease-in-out'
         
        }}
      >
        {buttonText}
      </Button>
      
      <Dialog
        open={open}
        slots={{ transition: Transition }}
        keepMounted
        onClose={() => setOpen(false)}
        maxWidth="md" 
       
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'transparent', 
            border: '1px solid #333',
            borderRadius: '12px',
            overflow: 'visible' 
          }
        }}
      >
        {/* Close Button */}
        

        <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {imagesArray.map((imgSrc, index) => (
            <img 
              key={index}
              src={imgSrc} 
              alt={`${title} Curriculum ${index + 1}`} 
              style={{ 
                width: '100%', 
                maxHeight: '80vh', 
                objectFit: 'contain', 
                display: 'block'
              }} 
            />
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}