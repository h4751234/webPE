#!/usr/local/bin/perl

# ���w�q�d���g�J�� HTML �ɮצ�m�ΦW��
$gbkhtml="/var/www/html/gbk.html";

# �]�w�d���O�� URL ��}
$gbkurl="http://�D��/gbk.html";

# ���o���ǻ��L�Ӫ����e
read(STDIN, $temp, $ENV{'CONTENT_LENGTH'});
@pairs=split(/&/,$temp);
foreach $item(@pairs)  {
  ($key,$content)=split (/=/,$item,2);
  $content=~tr/+/ /;
  $content=~ s/%(..)/pack("c",hex($1))/ge;
  $OLS3{$key}=$content;
}

#�g�L�W�z�ʧ@�A���ɯd���̩m�W�Τ��e�A�w���O��b $OLS3{'name'} �� $OLS3{'comment'} ��
$name=$OLS3{'name'};
$comment=$OLS3{'comment'};

# �B�z�_����D
$comment=~ s/\cM\n/<br>\n/g;

# ���o�d���ɶ�
($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst)=gmtime(time+8*60*60);
if (length ($min) == 1) {$min = '0'.$min;}
if (length ($sec) == 1) {$sec = '0'.$sec;}
$mon+=1;
$date="$mon/$mday/$year, $hour:$min:$sec";

# �}��HTML��, ��Ū�X�Ҧ������e
open(FHD, "$gbkhtml") || die "Content-type: text/html\n\n �}���ɮ׿��~!\n";
@all=<FHD>;
close(FHD);

# ���s�}��HTML��, �H�K��s��d�����e
open(FHD, ">$gbkhtml") || die "Content-type: text/html\n\n �}���ɮ׿��~!\n";

# �Q�ΰj��, �N���ɮפ��e�̦��g�^, �æb��L�{���g�J�s���d��
foreach $line(@all) {

   # �ӦC�O�_���аO? �Y�O, ��ܸӳB���s�d���}�l�n�g�J���a��
   if ($line =~ /<!--ols3-->/)  {

    # �g�^��Ӫ��аO, �H���i�~��ϥ�
      print FHD "<!--ols3-->\n";

     # �g�J�s���d��
      print FHD "�m�W: $name [�ɶ�: $date]<p>$comment<hr size=1>\n";

   } else {

    # �Y�ӦC���O�аO, ��ܬO�¦������e, �h�������ܦa�N���g�^
    print FHD $line;
  }
}

# ���� HTML ��
close(FHD);

# ���U��, �P�¤@�U�d��������, �T���^����ܯd���e��
print "Content-type: text/html\n\n";
print "<html><head>\n";
print "<META HTTP-EQUIV=REFRESH CONTENT=\"3;URL=$gbkurl\">\n";
print "<title>Thanks!</title></head>\n";
print "<body bgcolor=white><center>\n";
print "���±z���d��!\n";
print "</center></body></html>\n";

# �{������