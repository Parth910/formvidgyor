#include<bits/stdc++.h>
using namespace std;
int mp[20000001];
void solve(){
	int n;
	cin >> n;


	vector<int> a(n);
	int ttl = 0,mt=0;
	for(int i=0;i<n;i++){
		cin >> a[i];
		if(a[i]>0){
			ttl+=a[i];
		}else{
			mt-=a[i];
		}
	}

	// unordered_map<int,int> mp;
	mp[mt]=1;
	// cout << "-->" < mp[1] << "\n";

	int t = 0;
	long long int ans =0 ;
	for(int i=0;i<n;i++){
		t+=a[i];
			for(int j=0;j*j<=ttl;j++){
				if(mt+t-j*j>=0)
					ans+= mp[mt+t-j*j];
			}
		mp[mt+t]++;
	}

	cout << ans << "\n";

	 memset(mp,0,4*(mt+ttl+1));

	// for(int i=0;i<=mt+ttl+1;i++){
	// 	mp[i]=0;
	// }

}

int main(){

	int t;
	cin >> t;

	memset(mp,0,sizeof(mp)/4);

	for(int i=0;i<t;i++){
		cout << "Case #" << i+1 << ": " ;
		solve();
	}


	return 0;
}