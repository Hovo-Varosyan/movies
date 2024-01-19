import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => {
  return (
    <div style={{width:'100%', height:window.innerHeight, backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center'}}>
         <CircularProgress />
    </div>
  )
}
