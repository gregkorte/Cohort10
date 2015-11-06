using System.Windows;
using ConwaysGameOfLife;
using System.Windows.Threading;
using System;
using Xceed.Wpf.Toolkit;

namespace BoardViewer
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private Board currentBoard;
        private DispatcherTimer dispatcherTimer;

        public MainWindow()
        {
            currentBoard = new FauxGameOfLife();
            dispatcherTimer = new DispatcherTimer();

            InitializeComponent();

            TheListView.ItemsSource = currentBoard.ToList();
            dispatcherTimer.Tick += dispatcherTimerClick;
            dispatcherTimer.Interval = TimeSpan.FromSeconds((double)RunSpeed.Value);
        }

        private void dispatcherTimerClick(object sender, EventArgs e)
        {
            InitiateTick();
        }

        private void InitiateTick()
        {
            currentBoard.Tick();
            TheListView.ItemsSource = currentBoard.ToList();
        }

        private void Run_Button_Click(object sender, RoutedEventArgs e)
        {
            InitiateTick(); // To make it clear that clicking the button worked
            dispatcherTimer.Start();
            TickButton.IsEnabled = false;
            RunButton.IsEnabled = false;
            RunSpeed.IsEnabled = true;
            StopButton.IsEnabled = true;
        }

        private void Stop_Button_Click(object sender, RoutedEventArgs e)
        {
            dispatcherTimer.Stop();
            TickButton.IsEnabled = true;
            RunButton.IsEnabled = true;
            RunSpeed.IsEnabled = false;
            StopButton.IsEnabled = false;
        }

        private void Tick_Button_Click(object sender, RoutedEventArgs e)
        {
            InitiateTick();
        }

        private void RunSpeed_ValueChanged(object sender, RoutedPropertyChangedEventArgs<object> e)
        {
            dispatcherTimer.Interval = TimeSpan.FromSeconds((double)e.NewValue);
        }
    }
}
