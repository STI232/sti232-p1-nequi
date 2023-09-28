import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#E4E4E4',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#8E29DA',
  },
}));

export const ProgressBar = ({progress=0}) => {
  return(
    <div>
      <BorderLinearProgress variant="determinate" value={progress}/>
    </div>
  )
}