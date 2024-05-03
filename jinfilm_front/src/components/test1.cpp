#include <iostream>
using namespace std;
#define LENGTH 100

int main()
{
    int count1=0, count2=0, count3=0, count4=0, count5=0;
    
    for (int i=0; i<LENGTH; i++, count1++) {
        if (i<10) continue;
        count2++;
        for(int j=0; j<LENGTH; j++, count3++) {
            if (j<20) continue;
            count4++;
            for(int k=0; k<LENGTH; k++, count5++) {
                if (k==10) break;
            }
        }
    }

    cout << "count1 = " << count1 << ", count2 = " << count2 << ", count3 = " << count3 ;
    cout << ", count4 = " << count4 << ", count5 = " << count5;
    return 0;
    }
}