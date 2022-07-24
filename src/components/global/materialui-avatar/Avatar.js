let color = '#2C3244';

export default function stringAvatar(name) {
  return {
    sx: {
      bgcolor: color,
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}