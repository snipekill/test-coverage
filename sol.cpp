#include<bits/stdc++.h>
using namespace std;

int diff[3] = {1, 7, 30};
    // vector<int> dp(366, INT_MAX);
    // dp[0] = 0;
map<string, int> ans;
map<string,int> coverage;
int checkCoverage(int a, int b, int x, int y) {
    string testcases = "12";
    int value = 0;
    if(a>2*x){
        value = 1;
        testcases.insert(testcases.length(),"35");
    }
    else{
        value = -1;
        testcases.insert(testcases.length(),"45");
    }
    if(b>y*y){
        value+=1;
        testcases.insert(testcases.length(),"69");
    }
    else if(value*x <= -a){
        value-=1;
        testcases.insert(testcases.length(),"789");
    }
    else
        testcases.insert(testcases.length(),"79");

    coverage[testcases] = 1;
    cout<<testcases<<"\n";
    return value;
}

int main(){
    int n,a,b,x,y;
    ans["123569"] = 1;
    ans["124569"] = 1;
    ans["123579"] = 1;
    ans["124579"] = 1;
    ans["1235789"] = 1;
    ans["1245789"] = 1;
    cin>>n;
    vector<int> tests[n];
    // cout<<
    for(int i=0;i<n;i++){
        cin>>a>>b>>x>>y;
        checkCoverage(a,b,x,y);
    }
    int jj = true;
    vector<string> missing;
    for(auto it: ans){
        if(coverage.find(it.first) == coverage.end()){
            jj = false;
            missing.push_back(it.first);
            // break;
        }
    }
    if(jj) 
        cout<<"Passed\n";
    else{
        string p = "";
        for(int i=0;i<missing.size();i++){
            p.push_back('(');
            for(int j=0;j<missing[i].length();j++){
                p.push_back('S');
                p.push_back(missing[i][j]);
                p.push_back(',');
            }
            p.pop_back();
            p.push_back(')');
            p.push_back(',');
        }
        p.pop_back();
        p.insert(p.length(), " is/are missing");
        cout<<p<<"\n";
    }
    return 0;
}
