import './globals.css';
import { Provider } from 'react-redux';
import store from './store';

export const metadata = {
  title: 'Palia Plots',
  description: 'An app that helps you optimize your Palia Online farm, planning your plots out before you execute them in game!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
