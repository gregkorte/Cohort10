using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConwaysGameOfLife
{
    public interface Board
    {
        List<List<bool>> ToList();
        void Tick();
    }
}
